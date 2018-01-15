import {Component, OnInit} from '@angular/core';
import {Response} from '@angular/http';
import {ApiService} from '../services/api.service';
import {TaskDescService} from '../services/task-desc.service';
import {TaskBarService} from '../services/task-bar.service';

@Component({
  selector: 'app-tasks-panel',
  templateUrl: './tasks-panel.component.html',
  styleUrls: ['./tasks-panel.component.css']
})
export class TasksPanelComponent implements OnInit {

  private myTaskList: any[];
  private limiter = 65;
  errorTaskList = false;
  haveTasks = false;

  constructor(private apiService: ApiService, private taskDescService: TaskDescService, private taskbarService: TaskBarService) {
  }

  ngOnInit() {
    this.apiService.getMyTasks().subscribe(
      (response: Response) => {
        this.errorTaskList = false;

        if (response.status === 200) {
          const data = response.json();
          console.log(data);
          data.forEach(item => {
            if (item.source === '_1C') {
              item.source = item.source.substr(1);
            }
            if (item.description.length > 72) {
              item.short = item.description.substr(0, 72) + '...';
            } else {
              item.short = item.description;
            }
            item.isOpen = false;
          });
          this.myTaskList = data;
          if (this.myTaskList.length > 0) {
            this.haveTasks = true;
          } else {
            this.haveTasks = false;
          }
        }
        if (response.status === 204) {
          this.haveTasks = false;
        }

      },
      (error) => {
        this.errorTaskList = true;
        console.log(error);
      }
    );

  }

  taskAction(taskInfo) {
    taskInfo.isOpen = !taskInfo.isOpen;
  }

  openFullDesc(taskInfo) {
    this.taskDescService.setModalTaskInfo(
      taskInfo.source,
      taskInfo.number,
      taskInfo.fullDescription,
      taskInfo.author,
      taskInfo.startDate,
      taskInfo.date,
      taskInfo.executor,
      taskInfo.endDate,
      taskInfo.deadLine);
  }

}

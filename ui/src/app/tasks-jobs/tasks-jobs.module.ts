import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksJobsRoutingModule } from './tasks-jobs-routing.module';
import { TasksComponent } from './tasks/tasks.component';
import { JobsComponent } from './jobs/jobs.component';
import { ExecutionsComponent } from './executions/executions.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { DestroyComponent } from './tasks/destroy/destroy.component';
import { TaskComponent } from './tasks/task/task.component';
import { LaunchComponent } from './tasks/launch/launch.component';
import { SharedModule } from '../shared/shared.module';
import { ExecutionComponent } from './executions/execution/execution.component';
import { ExecutionComponent as JobExecutionComponent } from './jobs/execution/execution.component';
import { StopComponent } from './executions/stop/stop.component';
import { CleanupComponent } from './executions/cleanup/cleanup.component';
import { StepComponent } from './jobs/step/step.component';
import { CreateComponent } from './tasks/create/create.component';
import { TaskFloModule } from '../flo/task-flo.module';
import { LogComponent } from './executions/execution/log/log.component';


@NgModule({
  declarations: [
    TasksComponent,
    JobsComponent,
    ExecutionsComponent,
    DestroyComponent,
    TaskComponent,
    LaunchComponent,
    ExecutionComponent,
    StopComponent,
    CleanupComponent,
    JobExecutionComponent,
    StepComponent,
    CreateComponent,
    LogComponent
  ],
  imports: [
    CommonModule,
    ClarityModule,
    ReactiveFormsModule,
    SharedModule,
    TasksJobsRoutingModule,
    FormsModule,
    TaskFloModule,
  ]
})
export class TasksJobsModule { }

/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Step } from './Step';
import { ProjectApi } from '../project/ProjectApi';
import { SharedStepApi } from '../shared_step/SharedStepApi';
import { TestApi } from '../test/TestApi';
import { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import { CommentApi } from '../comment/CommentApi';
import { RunResultStepApi } from '../run_result_step/RunResultStepApi';

export interface StepApi extends Step {
  project?: ProjectApi;
  shared_step?: SharedStepApi;
  test?: TestApi;
  label_assigned?: LabelAssignedApi;
  comment?: CommentApi;
  run_result_step?: RunResultStepApi[];
}

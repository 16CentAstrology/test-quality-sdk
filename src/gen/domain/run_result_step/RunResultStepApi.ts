/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { RunResultStep } from './RunResultStep';
import { ProjectApi } from '../project/ProjectApi';
import { RunResultApi } from '../run_result/RunResultApi';
import { StepApi } from '../step/StepApi';
import { StatusApi } from '../status/StatusApi';
import { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import { CommentApi } from '../comment/CommentApi';
import { AttachmentApi } from '../attachment/AttachmentApi';

export interface RunResultStepApi extends RunResultStep {
  project?: ProjectApi;
  run_result?: RunResultApi;
  step?: StepApi;
  status?: StatusApi;
  label_assigned?: LabelAssignedApi;
  comment?: CommentApi;
  attachment?: AttachmentApi;
}

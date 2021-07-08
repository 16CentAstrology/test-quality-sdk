/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { RunResult } from './RunResult';
import { TestApi } from '../test/TestApi';
import { SuiteApi } from '../suite/SuiteApi';
import { ProjectApi } from '../project/ProjectApi';
import { RunApi } from '../run/RunApi';
import { StatusApi } from '../status/StatusApi';
import { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import { RunResultStepApi } from '../run_result_step/RunResultStepApi';
import { AttachmentApi } from '../attachment/AttachmentApi';
import { CommentApi } from '../comment/CommentApi';

export interface RunResultApi extends RunResult {
  test?: TestApi;
  suite?: SuiteApi;
  project?: ProjectApi;
  run?: RunApi;
  status?: StatusApi;
  label_assigned?: LabelAssignedApi;
  run_result_step?: RunResultStepApi[];
  attachment?: AttachmentApi;
  comment?: CommentApi;
}

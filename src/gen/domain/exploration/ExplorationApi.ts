/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import type { Exploration } from './Exploration';
import type { StatusApi } from '../status/StatusApi';
import type { ProjectApi } from '../project/ProjectApi';
import type { MilestoneApi } from '../milestone/MilestoneApi';
import type { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import type { ExplorationItemApi } from '../exploration_item/ExplorationItemApi';
import type { EnvironmentExplorationApi } from '../environment_exploration/EnvironmentExplorationApi';

export interface ExplorationApi extends Exploration {
  status?: StatusApi;
  project?: ProjectApi;
  milestone?: MilestoneApi;
  label_assigned?: LabelAssignedApi;
  exploration_item?: ExplorationItemApi[];
  environment_exploration?: EnvironmentExplorationApi[];
}

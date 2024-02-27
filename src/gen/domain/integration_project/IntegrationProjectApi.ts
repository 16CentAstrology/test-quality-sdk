/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { IntegrationProject } from './IntegrationProject';
import { ProjectApi } from '../project/ProjectApi';
import { IntegrationApi } from '../integration/IntegrationApi';
import { AppInstallProjectApi } from '../app_install_project/AppInstallProjectApi';
import { PlanApi } from '../plan/PlanApi';
import { DefectApi } from '../defect/DefectApi';
import { RequirementApi } from '../requirement/RequirementApi';
import { NativeDefectResApi } from '../native_defect_res/NativeDefectResApi';
import { NativeDefectStatusApi } from '../native_defect_status/NativeDefectStatusApi';
import { IntegrationStatusTypeApi } from '../integration_status_type/IntegrationStatusTypeApi';

export interface IntegrationProjectApi extends IntegrationProject {
  project?: ProjectApi;
  integration?: IntegrationApi;
  app_install_project?: AppInstallProjectApi;
  plan?: PlanApi;
  defect?: DefectApi[];
  requirement?: RequirementApi[];
  native_defect_res?: NativeDefectResApi[];
  native_defect_status?: NativeDefectStatusApi[];
  integration_status_type?: IntegrationStatusTypeApi[];
}

/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { LabelAssigned } from './LabelAssigned';
import { LabelApi } from '../label/LabelApi';
import { RunApi } from '../run/RunApi';
import { PlatVersionApi } from '../plat_version/PlatVersionApi';
import { AppVersionApi } from '../app_version/AppVersionApi';
import { SuiteApi } from '../suite/SuiteApi';
import { TestApi } from '../test/TestApi';
import { ProjectApi } from '../project/ProjectApi';
import { PurposeApi } from '../purpose/PurposeApi';
import { CaseTypeApi } from '../case_type/CaseTypeApi';
import { CasePriorityApi } from '../case_priority/CasePriorityApi';
import { StatusTypeApi } from '../status_type/StatusTypeApi';
import { TestQualityApi } from '../test_quality/TestQualityApi';
import { TestQualityTypeApi } from '../test_quality_type/TestQualityTypeApi';
import { NativeDefectResApi } from '../native_defect_res/NativeDefectResApi';
import { PlanApi } from '../plan/PlanApi';
import { NativeDefectStatusApi } from '../native_defect_status/NativeDefectStatusApi';
import { RunResultApi } from '../run_result/RunResultApi';
import { AppApi } from '../app/AppApi';
import { StepApi } from '../step/StepApi';
import { RunResultStepApi } from '../run_result_step/RunResultStepApi';
import { StatusApi } from '../status/StatusApi';
import { PlatApi } from '../plat/PlatApi';
import { AppVersionPlatVersionApi } from '../app_version_plat_version/AppVersionPlatVersionApi';
import { MilestoneApi } from '../milestone/MilestoneApi';

export interface LabelAssignedApi extends LabelAssigned {
  label?: LabelApi;
  run?: RunApi;
  plat_version?: PlatVersionApi;
  app_version?: AppVersionApi;
  suite?: SuiteApi;
  test?: TestApi;
  project?: ProjectApi;
  purpose?: PurposeApi;
  case_type?: CaseTypeApi;
  case_priority?: CasePriorityApi;
  status_type?: StatusTypeApi;
  test_quality?: TestQualityApi;
  test_quality_type?: TestQualityTypeApi;
  native_defect_res?: NativeDefectResApi;
  plan?: PlanApi;
  native_defect_status?: NativeDefectStatusApi;
  run_result?: RunResultApi;
  app?: AppApi;
  step?: StepApi;
  run_result_step?: RunResultStepApi;
  status?: StatusApi;
  plat?: PlatApi;
  app_version_plat_version?: AppVersionPlatVersionApi;
  milestone?: MilestoneApi;
}

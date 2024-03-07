/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Label } from './Label';
import { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';

export interface LabelApi extends Label {
  label_assigned?: LabelAssignedApi[];
}

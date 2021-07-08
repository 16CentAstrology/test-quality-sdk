/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */

import { Milestone } from './Milestone';

export interface MilestoneHistory extends Milestone {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}

/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import type { DefaultAttributes } from '../../models/DefaultAttributes';

export interface ComponentDocTemplate extends DefaultAttributes {
  id: number;
  created_by: number;
  created_at: string;
  updated_by: number;
  updated_at: string;
  epoch: number;
  is_default: boolean;
  sequence: number;
  doc_template_id: number;
  component_id: number;
  sample: any;
}

/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */
/* eslint-disable import/no-cycle */

import { Product } from './Product';

export interface ProductHistory extends Product {
  _id: string;
  operation: 'create' | 'delete' | 'update';
}

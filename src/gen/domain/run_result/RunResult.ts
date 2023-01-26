/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { KeyedModel } from '../../models/KeyedModel';

export interface RunResult extends KeyedModel {
  test_id: number;
  created_by: number;
  created_at: string;
  updated_by: number;
  updated_at: string;
  epoch: number;
  /**
   * The id of the user this run_result is assigned to.
   */
  assigned_to_tester?: number;
  virtual?: any;
  client_id: number;
  suite_id: number;
  app_version_plat_version_id?: number;
  project_id: number;
  run_id: number;
  /**
   * The order of tests within a run.
   */
  sequence: number;
  key: number;
  /**
   * This is a computed value. status_id cannot be set via endpoint. The value is set when run_result_step status_id is set on the last run_result_step in the sequence.
   */
  status_id: number;
  id: number;
  /**
   * Indicates the flakiness of the this test
   */
  flakiness?: number;
  data_set_row?: number;
}

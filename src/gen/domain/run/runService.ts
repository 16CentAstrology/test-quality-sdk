/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams, QueryParamsWithList } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { RunRoute } from '../../routes/Routes';
import { Run } from './Run';
import { RunApi } from './RunApi';

export const runGetMany = (
  queryParams?: QueryParams<Run>
): Promise<ResourceList<RunApi>> => {
  const config: QueryParams<Run> = {
    method: 'get',
    url: queryParams?.url || RunRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<RunApi>>(config)
    : getResponse<ResourceList<RunApi>, Run>(
        queryParams?.api || _client?.api,
        config
      );
};

export const runGetOne = (
  id: number,
  queryParams?: QueryParams<Run>
): Promise<RunApi> => {
  const config: QueryParams<Run> = {
    method: 'get',
    url: `${queryParams?.url || RunRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<RunApi>(config)
    : getResponse<RunApi, Run>(queryParams?.api || _client?.api, config);
};

export const runDeleteOne = (
  id: number,
  queryParams?: QueryParams<Run>
): Promise<MessageResponse> => {
  const config: QueryParams<Run> = {
    method: 'delete',
    url: `${queryParams?.url || RunRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, Run>(
        queryParams?.api || _client?.api,
        config
      );
};

export const runUpdateOne = (
  id: number,
  data: Partial<Run>,
  queryParams?: QueryParams<Run>
): Promise<Run> => {
  const config: QueryParams<Run> = {
    method: 'put',
    url: `${queryParams?.url || RunRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Run>(config)
    : getResponse<Run>(queryParams?.api || _client?.api, config);
};

export const runCreateOne = (
  data: Partial<Run>,
  queryParams?: QueryParams<Run>
): Promise<Run> => {
  const config: QueryParams<Run> = {
    method: 'post',
    url: queryParams?.url || RunRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Run>(config)
    : getResponse<Run>(queryParams?.api || _client?.api, config);
};

export const runCreateMany = (
  data: Partial<Run>[],
  queryParams?: QueryParamsWithList<Run>
): Promise<Run[]> => {
  const config: QueryParamsWithList<Run> = {
    method: 'post',
    url: queryParams?.url || RunRoute(),
    params: queryParams?.params,
    list: data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<Run[]>(config)
    : getResponse<Run[], Run>(queryParams?.api || _client?.api, config);
};

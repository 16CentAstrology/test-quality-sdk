/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { chunkArray } from '../../actions/chunkArray';
import type {
  QueryParams,
  QueryParamsWithList,
} from '../../actions/QueryParams';
import type { MessageResponse } from '../../actions/MessageResponse';
import type { ResourceList } from '../../models/ResourceList';
import { DataSetRoute } from '../../routes/Routes';
import type { DataSet } from './DataSet';
import type { DataSetApi } from './DataSetApi';

export const dataSetGetMany = (
  queryParams?: QueryParams<DataSet>,
): Promise<ResourceList<DataSetApi>> => {
  const config: QueryParams<DataSet> = {
    method: 'get',
    url: queryParams?.url ?? DataSetRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<DataSetApi>>(config)
    : getResponse<ResourceList<DataSetApi>, DataSet>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const dataSetGetOne = (
  id: number,
  queryParams?: QueryParams<DataSet>,
): Promise<DataSetApi> => {
  const config: QueryParams<DataSet> = {
    method: 'get',
    url: `${queryParams?.url ?? DataSetRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DataSetApi>(config)
    : getResponse<DataSetApi, DataSet>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const dataSetDeleteOne = (
  id: number,
  queryParams?: QueryParams<DataSet>,
): Promise<MessageResponse> => {
  const config: QueryParams<DataSet> = {
    method: 'delete',
    url: `${queryParams?.url ?? DataSetRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, DataSet>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const dataSetDeleteMany = (
  data: Partial<DataSet>[],
  queryParams?: QueryParamsWithList<DataSet>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<DataSet> = {
        method: 'post',
        url: queryParams?.url ?? DataSetRoute() + '/delete',
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, DataSet>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const dataSetUpdateOne = (
  id: number,
  data: Partial<DataSet>,
  queryParams?: QueryParams<DataSet>,
): Promise<DataSet> => {
  const config: QueryParams<DataSet> = {
    method: 'put',
    url: `${queryParams?.url ?? DataSetRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DataSet>(config)
    : getResponse<DataSet>(queryParams?.api ?? _client?.api, config);
};

export const dataSetCreateOne = (
  data: Partial<DataSet>,
  queryParams?: QueryParams<DataSet>,
): Promise<DataSet> => {
  const config: QueryParams<DataSet> = {
    method: 'post',
    url: queryParams?.url ?? DataSetRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DataSet>(config)
    : getResponse<DataSet>(queryParams?.api ?? _client?.api, config);
};

export const dataSetCreateMany = (
  data: Partial<DataSet>[],
  queryParams?: QueryParamsWithList<DataSet>,
): Promise<DataSet[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<DataSet> = {
        method: 'post',
        url: queryParams?.url ?? DataSetRoute(),
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<DataSet[]>(config)
        : getResponse<DataSet[], DataSet>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

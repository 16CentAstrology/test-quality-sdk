/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams, QueryParamsWithList } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { CaseTypeRoute } from '../../routes/Routes';
import { CaseType } from './CaseType';
import { CaseTypeApi } from './CaseTypeApi';

export const caseTypeGetMany = (
  queryParams?: QueryParams<CaseType>
): Promise<ResourceList<CaseTypeApi>> => {
  const config: QueryParams<CaseType> = {
    method: 'get',
    url: queryParams?.url || CaseTypeRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<CaseTypeApi>>(config)
    : getResponse<ResourceList<CaseTypeApi>, CaseType>(
        queryParams?.api || _client?.api,
        config
      );
};

export const caseTypeGetOne = (
  id: number,
  queryParams?: QueryParams<CaseType>
): Promise<CaseTypeApi> => {
  const config: QueryParams<CaseType> = {
    method: 'get',
    url: `${queryParams?.url || CaseTypeRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CaseTypeApi>(config)
    : getResponse<CaseTypeApi, CaseType>(
        queryParams?.api || _client?.api,
        config
      );
};

export const caseTypeDeleteOne = (
  id: number,
  queryParams?: QueryParams<CaseType>
): Promise<MessageResponse> => {
  const config: QueryParams<CaseType> = {
    method: 'delete',
    url: `${queryParams?.url || CaseTypeRoute()}/${id}`,
    params: queryParams?.params,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, CaseType>(
        queryParams?.api || _client?.api,
        config
      );
};

export const caseTypeUpdateOne = (
  id: number,
  data: Partial<CaseType>,
  queryParams?: QueryParams<CaseType>
): Promise<CaseType> => {
  const config: QueryParams<CaseType> = {
    method: 'put',
    url: `${queryParams?.url || CaseTypeRoute()}/${id}`,
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CaseType>(config)
    : getResponse<CaseType>(queryParams?.api || _client?.api, config);
};

export const caseTypeCreateOne = (
  data: Partial<CaseType>,
  queryParams?: QueryParams<CaseType>
): Promise<CaseType> => {
  const config: QueryParams<CaseType> = {
    method: 'post',
    url: queryParams?.url || CaseTypeRoute(),
    params: queryParams?.params,
    data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CaseType>(config)
    : getResponse<CaseType>(queryParams?.api || _client?.api, config);
};

export const caseTypeCreateMany = (
  data: Partial<CaseType>[],
  queryParams?: QueryParamsWithList<CaseType>
): Promise<CaseType[]> => {
  const config: QueryParamsWithList<CaseType> = {
    method: 'post',
    url: queryParams?.url || CaseTypeRoute(),
    params: queryParams?.params,
    list: data,
    headers: queryParams?.headers,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<CaseType[]>(config)
    : getResponse<CaseType[], CaseType>(
        queryParams?.api || _client?.api,
        config
      );
};

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
import type { DefectResNativeDefectRes } from './DefectResNativeDefectRes';
import type { DefectResNativeDefectResApi } from './DefectResNativeDefectResApi';

export const defectResNativeDefectResDetach = (
  data: Partial<DefectResNativeDefectRes>,
  queryParams?: QueryParams<DefectResNativeDefectRes>,
): Promise<MessageResponse> => {
  if (data.id === undefined) {
    return Promise.reject(new Error('Must supply id'));
  }
  const config: QueryParams<DefectResNativeDefectRes> = {
    method: 'delete',
    url: `/defect_res_native_defect_res/${data.id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, DefectResNativeDefectRes>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const defectResNativeDefectResDeleteMany = (
  data: Partial<DefectResNativeDefectRes>[],
  queryParams?: QueryParamsWithList<DefectResNativeDefectRes>,
): Promise<{ count: number }[]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<DefectResNativeDefectRes> = {
        method: 'post',
        url: `/defect_res_native_defect_res/delete`,
        params: queryParams?.params,
        list: chunk,
        headers: queryParams?.headers,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<{ count: number }>(config)
        : getResponse<{ count: number }, DefectResNativeDefectRes>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const defectResNativeDefectResUpdateOne = (
  id: number,
  data: Partial<DefectResNativeDefectRes>,
  queryParams?: QueryParams<DefectResNativeDefectRes>,
): Promise<DefectResNativeDefectRes> => {
  const config: QueryParams<DefectResNativeDefectRes> = {
    method: 'put',
    url: `/defect_res_native_defect_res/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectResNativeDefectRes>(config)
    : getResponse<DefectResNativeDefectRes>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const defectResNativeDefectResCreateOne = (
  data: Partial<DefectResNativeDefectRes>,
  queryParams?: QueryParams<DefectResNativeDefectRes>,
): Promise<DefectResNativeDefectRes> => {
  const config: QueryParams<DefectResNativeDefectRes> = {
    method: 'post',
    url: queryParams?.url ?? `/defect_res_native_defect_res`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectResNativeDefectRes>(config)
    : getResponse<DefectResNativeDefectRes>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

export const defectResNativeDefectResCreateMany = (
  data: Partial<DefectResNativeDefectRes>[],
  queryParams?: QueryParamsWithList<DefectResNativeDefectRes>,
): Promise<DefectResNativeDefectRes[][]> => {
  const chunks = chunkArray(data, 1000);
  return Promise.all(
    chunks.map((chunk) => {
      const config: QueryParamsWithList<DefectResNativeDefectRes> = {
        method: 'post',
        url: queryParams?.url ?? `/defect_res_native_defect_res`,
        params: queryParams?.params,
        list: chunk,
      };

      return queryParams?.batch
        ? queryParams.batch.addBatch<DefectResNativeDefectRes[]>(config)
        : getResponse<DefectResNativeDefectRes[], DefectResNativeDefectRes>(
            queryParams?.api ?? _client?.api,
            config,
          );
    }),
  );
};

export const defectResNativeDefectResGetMany = (
  queryParams?: QueryParams<DefectResNativeDefectRes>,
): Promise<ResourceList<DefectResNativeDefectResApi>> => {
  const config: QueryParams<DefectResNativeDefectRes> = {
    method: 'get',
    url: queryParams?.url ?? `/defect_res_native_defect_res`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<DefectResNativeDefectResApi>>(
        config,
      )
    : getResponse<
        ResourceList<DefectResNativeDefectResApi>,
        DefectResNativeDefectRes
      >(queryParams?.api ?? _client?.api, config);
};

export const defectResNativeDefectResGetOne = (
  id: number,
  queryParams?: QueryParams<DefectResNativeDefectRes>,
): Promise<DefectResNativeDefectResApi> => {
  const config: QueryParams<DefectResNativeDefectRes> = {
    method: 'get',
    url: `${queryParams?.url ?? `/defect_res_native_defect_res/${id}`}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<DefectResNativeDefectResApi>(config)
    : getResponse<DefectResNativeDefectResApi, DefectResNativeDefectRes>(
        queryParams?.api ?? _client?.api,
        config,
      );
};

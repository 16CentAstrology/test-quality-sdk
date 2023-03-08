/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { User } from './User';
import { IntegrationUserApi } from '../integration_user/IntegrationUserApi';
import { IntegrationApi } from '../integration/IntegrationApi';
import { SubscriptionsApi } from '../subscriptions/SubscriptionsApi';
import { SubscriptionUserApi } from '../subscription_user/SubscriptionUserApi';
import { NotificationsApi } from '../notifications/NotificationsApi';
import { BillingContactApi } from '../billing_contact/BillingContactApi';
import { AccessRoleUserApi } from '../access_role_user/AccessRoleUserApi';
import { AccessRoleApi } from '../access_role/AccessRoleApi';

export interface UserApi extends User {
  integration?: IntegrationApi[];
  subscriptions?: SubscriptionsApi[];
  subscription_user?: SubscriptionUserApi[];
  notifications?: NotificationsApi;
  billing_contact?: BillingContactApi[];
  access_role?: AccessRoleApi[];
  access_role_id?: number; // This field is required during create
  pivot?: IntegrationUserApi | AccessRoleUserApi;
  integration_user?: Partial<IntegrationUserApi>;
  access_role_user?: Partial<AccessRoleUserApi>;
}

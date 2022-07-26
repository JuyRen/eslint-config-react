import fs from "fs";
import path from "path";

import React from "react";
import { Link, useRequest } from "umi";
import { Table } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import ProLayout, { PageContainer } from "@ant-design/pro-layout";

import { menuRoutes } from "config/routes";
import { getVerifycode } from "@/services/verifyCode";
import assets from "@assets/verifyCode";
import components from "@components/verifyCode";
import styles from "@styles/verifyCode";

foo();

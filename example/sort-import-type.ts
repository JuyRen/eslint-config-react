import fs from "fs";
import path from "path";

import type { Component } from "react";
import React, {
    useCallback,
    useEffect,
    useImperativeHandle,
    useMemo,
    useState,
} from "react";
import { Link, useRequest } from "umi";
import type { TableProps } from "antd";
import { Table, Table } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import type { ColumnProps } from "antd/lib/table";
import classNames from "classnames";
import moment from "moment";
import type { Store } from "redux";
import StoreD from "redux";
import useRequest from "@ahooksjs/use-request";
import ProLayout, { PageContainer } from "@ant-design/pro-layout";
import type { ICondition } from "@moresec/rc-query";
import MSQuery from "@moresec/rc-query";
import { computedNextPage, timeFormat } from "@moresec/utils";
import type { Story } from "@storybook/react";
import { storiesOf } from "@storybook/react";

import { menuRoutes } from "config/routes";
import type { AppRouter } from "@/App";
import App from "@/App";
import useQuery from "@/hooks/useQuery";
import useTableFooter from "@/hooks/useTableFooter";
import useTableSelect from "@/hooks/useTableSelect";
import { getVerifycode } from "@/services/verifyCode";
import { SORT_KEY } from "@/utils/constant";
import assets from "@assets/verifyCode";
import components from "@components/verifyCode";
import styles from "@styles/verifyCode";

import "./polyfills";

import type { ZTASearchProps } from "../ZTASearch";
import ZTASearch from "../ZTASearch";
import type { ZTATableFooterProps } from "../ZTATableFooter";
import { MSIcon, ZTATableFooter } from "..";

import type { Page } from "./page";
import page from "./page";
import type { Css } from "./styles";
import styles from "./styles";
import {
    handleOptionsValue,
    handlePaginationResult,
    renderColValue,
} from "./utils";

import styles from "./index.less";

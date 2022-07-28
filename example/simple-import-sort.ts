import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import type { TableProps } from "antd";
import { Table } from "antd";
import type { ColumnProps } from "antd/lib/table";
import classNames from "classnames";
import moment from "moment";
import useRequest from "@ahooksjs/use-request";
import type { ICondition } from "@moresec/rc-query";
import MSQuery from "@moresec/rc-query";
import { computedNextPage, timeFormat } from "@moresec/utils";

import useQuery from "@/hooks/useQuery";
import useTableFooter from "@/hooks/useTableFooter";
import useTableSelect from "@/hooks/useTableSelect";
import { SORT_KEY } from "@/utils/constant";

import type { ZTASearchProps } from "../ZTASearch";
import ZTASearch from "../ZTASearch";
import type { ZTATableFooterProps } from "../ZTATableFooter";
import { MSIcon, ZTATableFooter } from "..";

import {
  handleOptionsValue,
  handlePaginationResult,
  renderColValue,
} from "./utils";

import styles from "./index.less";

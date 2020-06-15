// @generated
/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { RepositorySelector, ScheduleTickStatus, PipelineRunStatus, ScheduleStatus } from "./../../types/globalTypes";

// ====================================================
// GraphQL query operation: SchedulesRootQuery
// ====================================================

export interface SchedulesRootQuery_scheduler_Scheduler {
  __typename: "Scheduler";
}

export interface SchedulesRootQuery_scheduler_SchedulerNotDefinedError {
  __typename: "SchedulerNotDefinedError";
  message: string;
}

export interface SchedulesRootQuery_scheduler_PythonError_cause {
  __typename: "PythonError";
  message: string;
  stack: string[];
}

export interface SchedulesRootQuery_scheduler_PythonError {
  __typename: "PythonError";
  message: string;
  stack: string[];
  cause: SchedulesRootQuery_scheduler_PythonError_cause | null;
}

export type SchedulesRootQuery_scheduler = SchedulesRootQuery_scheduler_Scheduler | SchedulesRootQuery_scheduler_SchedulerNotDefinedError | SchedulesRootQuery_scheduler_PythonError;

export interface SchedulesRootQuery_scheduleDefinitionsOrError_RepositoryNotFoundError {
  __typename: "RepositoryNotFoundError";
}

export interface SchedulesRootQuery_scheduleDefinitionsOrError_ScheduleDefinitions_results_partitionSet {
  __typename: "PartitionSet";
  name: string;
}

export interface SchedulesRootQuery_scheduleDefinitionsOrError_ScheduleDefinitions_results_scheduleState_ticks {
  __typename: "ScheduleTick";
  tickId: string;
  status: ScheduleTickStatus;
}

export interface SchedulesRootQuery_scheduleDefinitionsOrError_ScheduleDefinitions_results_scheduleState_runs_tags {
  __typename: "PipelineTag";
  key: string;
  value: string;
}

export interface SchedulesRootQuery_scheduleDefinitionsOrError_ScheduleDefinitions_results_scheduleState_runs {
  __typename: "PipelineRun";
  runId: string;
  tags: SchedulesRootQuery_scheduleDefinitionsOrError_ScheduleDefinitions_results_scheduleState_runs_tags[];
  pipelineName: string;
  status: PipelineRunStatus;
}

export interface SchedulesRootQuery_scheduleDefinitionsOrError_ScheduleDefinitions_results_scheduleState_stats {
  __typename: "ScheduleTickStatsSnapshot";
  ticksStarted: number;
  ticksSucceeded: number;
  ticksSkipped: number;
  ticksFailed: number;
}

export interface SchedulesRootQuery_scheduleDefinitionsOrError_ScheduleDefinitions_results_scheduleState {
  __typename: "ScheduleState";
  id: string;
  scheduleOriginId: string;
  scheduleName: string;
  cronSchedule: string;
  runningScheduleCount: number;
  ticks: SchedulesRootQuery_scheduleDefinitionsOrError_ScheduleDefinitions_results_scheduleState_ticks[];
  runsCount: number;
  runs: SchedulesRootQuery_scheduleDefinitionsOrError_ScheduleDefinitions_results_scheduleState_runs[];
  stats: SchedulesRootQuery_scheduleDefinitionsOrError_ScheduleDefinitions_results_scheduleState_stats;
  ticksCount: number;
  status: ScheduleStatus;
}

export interface SchedulesRootQuery_scheduleDefinitionsOrError_ScheduleDefinitions_results {
  __typename: "ScheduleDefinition";
  name: string;
  cronSchedule: string;
  pipelineName: string;
  solidSelection: (string | null)[] | null;
  mode: string;
  partitionSet: SchedulesRootQuery_scheduleDefinitionsOrError_ScheduleDefinitions_results_partitionSet | null;
  scheduleState: SchedulesRootQuery_scheduleDefinitionsOrError_ScheduleDefinitions_results_scheduleState | null;
}

export interface SchedulesRootQuery_scheduleDefinitionsOrError_ScheduleDefinitions {
  __typename: "ScheduleDefinitions";
  results: SchedulesRootQuery_scheduleDefinitionsOrError_ScheduleDefinitions_results[];
}

export interface SchedulesRootQuery_scheduleDefinitionsOrError_PythonError_cause {
  __typename: "PythonError";
  message: string;
  stack: string[];
}

export interface SchedulesRootQuery_scheduleDefinitionsOrError_PythonError {
  __typename: "PythonError";
  message: string;
  stack: string[];
  cause: SchedulesRootQuery_scheduleDefinitionsOrError_PythonError_cause | null;
}

export type SchedulesRootQuery_scheduleDefinitionsOrError = SchedulesRootQuery_scheduleDefinitionsOrError_RepositoryNotFoundError | SchedulesRootQuery_scheduleDefinitionsOrError_ScheduleDefinitions | SchedulesRootQuery_scheduleDefinitionsOrError_PythonError;

export interface SchedulesRootQuery_scheduleStatesOrError_RepositoryNotFoundError {
  __typename: "RepositoryNotFoundError";
}

export interface SchedulesRootQuery_scheduleStatesOrError_ScheduleStates_results_ticks {
  __typename: "ScheduleTick";
  tickId: string;
  status: ScheduleTickStatus;
}

export interface SchedulesRootQuery_scheduleStatesOrError_ScheduleStates_results_runs_tags {
  __typename: "PipelineTag";
  key: string;
  value: string;
}

export interface SchedulesRootQuery_scheduleStatesOrError_ScheduleStates_results_runs {
  __typename: "PipelineRun";
  runId: string;
  tags: SchedulesRootQuery_scheduleStatesOrError_ScheduleStates_results_runs_tags[];
  pipelineName: string;
  status: PipelineRunStatus;
}

export interface SchedulesRootQuery_scheduleStatesOrError_ScheduleStates_results_stats {
  __typename: "ScheduleTickStatsSnapshot";
  ticksStarted: number;
  ticksSucceeded: number;
  ticksSkipped: number;
  ticksFailed: number;
}

export interface SchedulesRootQuery_scheduleStatesOrError_ScheduleStates_results {
  __typename: "ScheduleState";
  id: string;
  scheduleOriginId: string;
  scheduleName: string;
  cronSchedule: string;
  runningScheduleCount: number;
  ticks: SchedulesRootQuery_scheduleStatesOrError_ScheduleStates_results_ticks[];
  runsCount: number;
  runs: SchedulesRootQuery_scheduleStatesOrError_ScheduleStates_results_runs[];
  stats: SchedulesRootQuery_scheduleStatesOrError_ScheduleStates_results_stats;
  ticksCount: number;
  status: ScheduleStatus;
}

export interface SchedulesRootQuery_scheduleStatesOrError_ScheduleStates {
  __typename: "ScheduleStates";
  results: SchedulesRootQuery_scheduleStatesOrError_ScheduleStates_results[];
}

export interface SchedulesRootQuery_scheduleStatesOrError_PythonError_cause {
  __typename: "PythonError";
  message: string;
  stack: string[];
}

export interface SchedulesRootQuery_scheduleStatesOrError_PythonError {
  __typename: "PythonError";
  message: string;
  stack: string[];
  cause: SchedulesRootQuery_scheduleStatesOrError_PythonError_cause | null;
}

export type SchedulesRootQuery_scheduleStatesOrError = SchedulesRootQuery_scheduleStatesOrError_RepositoryNotFoundError | SchedulesRootQuery_scheduleStatesOrError_ScheduleStates | SchedulesRootQuery_scheduleStatesOrError_PythonError;

export interface SchedulesRootQuery {
  scheduler: SchedulesRootQuery_scheduler;
  scheduleDefinitionsOrError: SchedulesRootQuery_scheduleDefinitionsOrError;
  scheduleStatesOrError: SchedulesRootQuery_scheduleStatesOrError;
}

export interface SchedulesRootQueryVariables {
  repositorySelector: RepositorySelector;
  limit: number;
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../../..";

export interface TestSubmissionState {
    problemId: SeedTrace.ProblemId;
    defaultTestCases: SeedTrace.TestCase[];
    customTestCases: SeedTrace.TestCase[];
    status: SeedTrace.TestSubmissionStatus;
}
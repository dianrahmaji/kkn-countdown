import { asNexusMethod } from "nexus";
import { GraphQLDateTime } from "graphql-scalars";

export * from "./GuestBook";

export const dateTime = asNexusMethod(GraphQLDateTime, "DateTime");

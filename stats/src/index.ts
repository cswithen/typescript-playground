import { MatchReader } from "./MatchReader";

import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

// report generating a report in the console
const consoleSummary = new Summary(
  new WinsAnalysis("Man United"),
  new ConsoleReport()
);

consoleSummary.buildAndPrintReport(matchReader.matches);

// // report generating a report in a file
// const summary = new Summary(
//   new WinsAnalysis("Man United"), 
//   new HtmlReport());
const htmlSummary = Summary.winsAnalysisWithHtmlReport("Man United")

htmlSummary.buildAndPrintReport(matchReader.matches)


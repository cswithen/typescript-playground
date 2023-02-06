import { MatchData } from "./MatchData";

import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winsAnalysisWithHtmlReport(teamName: string): Summary {
    return new Summary(new WinsAnalysis(teamName), new HtmlReport());
  }

  constructor(public analyzer: Analyzer, public outpuTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);

    this.outpuTarget.print(output);
  }
}

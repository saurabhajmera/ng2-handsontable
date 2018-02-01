/* tslint:disable:max-line-length */
import { Component } from '@angular/core';

const name = 'Handsontable';
// webpack html imports
/* tslint:disable-next-line:no-var-requires */
const doc = require('html-loader!markdown-loader!./../../../README.md');

/* tslint:disable-next-line:no-any */
const tabDesc: any[] = [
  {
    heading: 'Pro',
    ts: require('!!prismjs-loader?lang=typescript!./handsontable/handsontable-pro-demo.ts'),
    html: require('!!prismjs-loader?lang=markup!./handsontable/handsontable-pro-demo.html')
  },
  {
    heading: 'Basic',
    ts: require('!!prismjs-loader?lang=typescript!./handsontable/basic-demo.ts'),
    html: require('!!prismjs-loader?lang=markup!./handsontable/basic-demo.html')
  },
  {
    heading: 'Advanced',
    ts: require('!!prismjs-loader?lang=typescript!./handsontable/advanced-demo.ts'),
    html: require('!!prismjs-loader?lang=markup!./handsontable/advanced-demo.html'),
    source: 'https://www.quandl.com/c/demography/total-population-by-country'

  },
  {
    heading: 'Sheet',
    ts: require('!!prismjs-loader?lang=typescript!./handsontable/sheet-demo.ts'),
    html: require('!!prismjs-loader?lang=markup!./handsontable/sheet-demo.html')

  }
  ,
  // Requires Handsontable Pro: http://docs.handsontable.com/pro/1.10.1/demo-formula-support.html
  // See ./external
  // {
  //   heading: 'Personal',
  //   ts: require('!!prismjs-loader?lang=typescript!./handsontable/personal-demo.ts'),
  //   html: require('!!prismjs-loader?lang=markup!./handsontable/personal-demo.html')

  // },
  {
    heading: 'Finance',
    ts: require('!!prismjs-loader?lang=typescript!./handsontable/finance-demo.ts'),
    html: require('!!prismjs-loader?lang=markup!./handsontable/finance-demo.html'),
    source: 'https://www.quandl.com/c/markets/bitcoin-data'
  },
  {
    heading: 'Science',
    ts: require('!!prismjs-loader?lang=typescript!./handsontable/science-demo.ts'),
    html: require('!!prismjs-loader?lang=markup!./handsontable/science-demo.html'),
    source: 'https://plot.ly/~JStevens/0/an-age-distribution-for-scientific-genius'
  },
  {
    heading: 'Sport',
    ts: require('!!prismjs-loader?lang=typescript!./handsontable/sport-demo.ts'),
    html: require('!!prismjs-loader?lang=markup!./handsontable/sport-demo.html'),
    source: 'http://www.forbes.com/nba-valuations/list'
  }
];

const dataLink = `<p>
  The actual data can be viewed
  <a href="https://github.com/valor-software/ng2-handsontable/blob/master/demo/src/components/handsontable/data.ts">here</a>.</p>`;

let tabsContent = ``;
tabDesc.forEach(desc => {
  let source = '';
  if (desc.source) {
    source = `Source of data: <a href="${desc.source}" target="_blank">${desc.source}</a><br>`;
  }

  tabsContent += `
          <tab heading="${desc.heading}" (select)="select($event)">
          <div class="card card-block panel panel-default panel-body">

            <${desc.heading.toLowerCase()}-demo *ngIf="currentHeading === '${desc.heading}'"></${desc.heading.toLowerCase()}-demo>

            <br>

            <div class="row" style="margin: 0px;">
              <tabset>
                <tab heading="Markup">
                  <div class="card card-block panel panel-default panel-body">
                    <pre class="language-html"><code class="language-html" ngNonBindable>${escape(desc.html)}</code></pre>
                  </div>
                </tab>
                <tab heading="TypeScript">
                  <div class="card card-block panel panel-default panel-body">
                    <pre class="language-typescript"><code class="language-typescript" ngNonBindable>${escape(desc.ts)}</code></pre>
                  </div>
                </tab>
              </tabset>
              ${source}
              ${dataLink}
            </div>
          </div>
        </tab>
  `;
});

@Component({
  selector: 'handsontable-section',
  template: `
  <section id="${name.toLowerCase()}">
    <div class="row">
      <tabset>

        ${tabsContent}

      </tabset>
    </div>

    <div class="row">
      <h2>Documentation</h2>
      <div class="card card-block panel panel-default panel-body" ngNonBindable>${escape(doc)}</div>
    </div>
  </section>
  `
})
export class HandsontableSectionComponent {
  private currentHeading = 'Pro';

  private select(e) {
    if (e.heading) {
      this.currentHeading = e.heading;
    }
  }
}

function escape(text: string): string {
  return text.replace(/{/g, '&#123;').replace(/}/g, '&#125;');
}

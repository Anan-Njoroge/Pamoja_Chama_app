import PDFDocument from 'pdfkit';

export function buildFinancialSummary(

  group: any,

  summary: any,

): PDFKit.PDFDocument {

  const doc = new PDFDocument({

    margin: 50,

  });

  doc

    .fontSize(22)

    .text(

      group.name,

      {

        align: 'center',

      },

    );

  doc.moveDown();

  doc

    .fontSize(18)

    .text(

      'Financial Summary',

      {

        align: 'center',

      },

    );

  doc.moveDown(2);

  doc.fontSize(14);

  doc.text(

    `Total Contributions: ${group.currency} ${summary.totalContributions.toLocaleString()}`,

  );

  doc.moveDown();

  doc.text(

    `Approved Contributions : ${summary.approved}`,

  );

  doc.text(

    `Pending Contributions : ${summary.pending}`,

  );

  doc.text(

    `Rejected Contributions : ${summary.rejected}`,

  );

  doc.text(

    `Records : ${summary.records}`,

  );

  doc.end();

  return doc;

}
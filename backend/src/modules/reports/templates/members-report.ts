import PDFDocument from 'pdfkit';

export function buildMembersReport(

  group: any,

  members: any[],

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

    .fontSize(16)

    .text(

      'Members Report',

      {

        align: 'center',

      },

    );

  doc.moveDown(2);

  doc.font('Helvetica-Bold');

  doc.text('Member', 50);

  doc.text('Role', 260);

  doc.text('Status', 360);

  doc.text('Joined', 460);

  doc.moveDown();

  doc.font('Helvetica');

  members.forEach(

    member => {

      doc.text(member.member, 50);

      doc.text(member.role, 260);

      doc.text(member.status, 360);

      doc.text(

        new Date(

          member.joinedAt,

        ).toLocaleDateString(),

        460,

      );

      doc.moveDown();

    },

  );

  doc.end();

  return doc;

}
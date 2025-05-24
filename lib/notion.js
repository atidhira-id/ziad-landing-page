import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getAllClients = async () => {
  const clients = await notion.databases.query({
    database_id: process.env.DATABASE_ID_CLIENTS,
  });

  const allClients = clients.results;

  return allClients.map((client) => {
    return {
      id: client.id,
      name: client.properties.Name.title[0].plain_text,
      logo: client.properties.Logo.files[0].file.url,
    };
  });
};

export const getAllTestimony = async () => {
  const testimonials = await notion.databases.query({
    database_id: process.env.DATABASE_ID_TESTIMONIALS,
  });

  const allTestimony = testimonials.results;

  return allTestimony.map((testimony) => {
    return {
      id: testimony.id,
      name: testimony.properties.Name.title[0].plain_text,
      position: testimony.properties.Position.rich_text[0].plain_text,
      title: testimony.properties.Title.rich_text[0].plain_text,
      desc: testimony.properties.Description.rich_text[0].plain_text,
    };
  });
};

export const getAllDocumentations = async () => {
  const documentations = await notion.databases.query({
    database_id: process.env.DATABASE_ID_DOCUMENTATIONS,
  });

  const allDocumentations = documentations.results;

  return allDocumentations.map((documentation) => {
    return {
      id: documentation.id,
      name: documentation.properties.Pesantren.title[0].plain_text,
      desc: documentation.properties.Description.rich_text[0].plain_text,
      image: documentation.properties.Image.files[0].file.url,
    };
  });
};

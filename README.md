# ZIAD - Landing Page

Welcome to the **ZIAD Landing Page** repository! This project is a promotional and informational website for **ZIAD**, a mobile app designed to streamline school management, including student data, payments, e-learning, and parent communication.

## 🔍 About ZIAD

**ZIAD** is a mobile application created to improve the communication and administrative workflows of schools. It helps educational institutions manage:

- 📚 Student data
- 💳 Payments and transactions
- 🧑‍🏫 E-learning modules
- 👨‍👩‍👧‍👦 Communication with parents

This landing page serves to introduce the app, highlight its features, display client testimonials, and offer easy contact or download links.

## 🚀 Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/)
- **CMS**: [Notion](https://www.notion.so/) (used to manage content for the landing page)

## 🧪 Environment Variables

This project uses several environment variables stored in an `.env.local` file:

```env
NOTION_TOKEN=your_notion_integration_token
DATABASE_ID_TESTIMONIALS=your_testimonials_database_id
DATABASE_ID_CLIENTS=your_clients_database_id
DATABASE_ID_DOCUMENTATIONS=your_documentations_database_id
```

## 🗂️ Notion Database Structure

The following Notion databases are used in this project:

### 1. Testimonials Database

- `Name` (Title): Name of the person giving the testimonial
- `Position` (Text): Position of the person giving the testimonial
- `Title` (Text): The Title of the testimonial
- `Description` (Text): Content of the testimonial

### 2. Clients Database

- `Name` (Title): Name of the client or institution
- `Logo` (Files & Media): Client logo image

### 3. Documentations Database

- `Pesantren` (Title): Title of the documentation
- `Description` (Text): Content of the documentation
- `Image` (Files & Media): Image of the documentation

> ⚠️ Make sure your Notion integration has access to these databases, and the database schema matches the fields listed above.

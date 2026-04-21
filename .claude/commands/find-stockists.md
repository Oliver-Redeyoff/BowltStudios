# Find Stockists

Find 3 new potential stockists for Bowlt Studios in London, research each one deeply, write a personalised outreach email for each, save their details to Google Drive, and create a Gmail draft ready to send.

---

## Step 1 — Load brand context

Read `/Users/oliverredeyoff/Documents/repos/BowltStudios/brand.md` in full. Pay close attention to:
- Target stockist profiles and fit signals (both good and poor)
- Tone of voice rules — you will write emails in this voice
- The product details (characters, watercolour, specific card examples)
- The website: https://bowltstudios.com/

---

## Step 2 — Check who has already been contacted

Use the Google Drive MCP connector to find the **"Bowlt Studios Stockists"** folder:

```
search_files query: mimeType = 'application/vnd.google-apps.folder' and title = 'Bowlt Studios Stockists'
```

If the folder exists, note its `id`. Then list its contents:

```
search_files query: '<folder_id>' in parents and mimeType != 'application/vnd.google-apps.folder'
```

Collect every file title (e.g. `The Corner Gift Shop.txt`). Strip the `.txt` extension. This is your **contacted list** — never proceed with a shop that already appears here.

If the folder doesn't exist yet, treat the contacted list as empty. You'll create the folder in Step 5.

---

## Step 3 — Search for prospects

Use WebSearch to find roughly 10 candidate London-based independent retailers. Run several targeted searches, for example:
- "independent gift shops London"
- "independent florists London gift cards"
- "boutique lifestyle shops London independent makers"
- "children's toy shops London independent"
- "museum shop London gift stationery"
- "garden centre gift shop London"

A good prospect matches several of these signals from brand.md:
- Curated, independent product selection
- Supports independent or local makers
- Warm, whimsical, or handcrafted brand feel
- Has an existing card or stationery section
- UK-based, ideally London

Poor fit: large chains, discount retailers, edgy/adult tone, purely digital.

For each candidate, note: name, rough location, website if visible in results.

---

## Step 4 — Filter and select 3 new prospects

Remove from your candidate list any shop whose name matches (or closely matches) a name from the contacted list in Step 2.

From the remaining candidates, select the **3 best fits** — the ones that most clearly match the target profile.

---

## Step 5 — Research each of the 3 prospects

For each shortlisted shop, do deeper research using WebSearch. Find:

- **Website URL**
- **Instagram or social media** (if present)
- **Physical address**
- **Contact email** — look on their Contact or About page. If no direct email, note the contact form URL.
- **What they currently stock** — products, brands, categories. Any existing cards or illustration-based products?
- **Their aesthetic and vibe** — how would you describe their brand in a sentence?
- **A specific reason** this shop is a great fit for Bowlt Studios — something concrete you'll reference in the email.

---

## Step 6 — Write a personalised email for each shop

Write one outreach email per shop. Follow the Bowlt Studios tone of voice from brand.md exactly:

**The voice:**
- Warm, upbeat, a bit playful — never pushy or corporate
- Write like a person, not a brand
- Be specific: name card characters, mention the watercolour, reference the hand-drawn feel
- Keep it short and genuine — a few short paragraphs
- Gentle humour is fine where it fits naturally
- Sign off from Tilly

**Each email must:**
- Open with something specific about *that shop* — a product they stock, their aesthetic, something that shows you've looked at them
- Explain what Bowlt Studios is in a sentence or two (hand-illustrated watercolour greeting cards, playful characters, made by Tilly in London)
- Mention one or two specific card designs that would suit their customers — draw from brand.md examples and reference characters and scenes, not just the occasion
- Include the website: https://bowltstudios.com/
- Offer to send samples or a lookbook, or invite them to get in touch
- Sign: Tilly, Bowlt Studios

**Do not:**
- Use exclamation marks at the end of every sentence
- Use marketing buzzwords ("leverage", "synergy", "curated offering")
- Write anything that sounds templated

**Subject line:** Make it warm and specific — not "Wholesale Enquiry". Something that sounds like it came from a real person.

---

## Step 7 — Save each shop's details to Google Drive

For each of the 3 shops, create a `.txt` file in the **"Bowlt Studios Stockists"** folder.

If the folder doesn't exist yet, create it first:
```
create_file title: "Bowlt Studios Stockists", mimeType: "application/vnd.google-apps.folder"
```
Note the returned `id` as the parent folder ID.

Then create each client file. The filename should be the shop name exactly, e.g. `Florals & Things.txt`.

**Important:** Set `disableConversionToGoogleType: true` so the file stays as plain text (not converted to a Google Doc). The content field must be **base64-encoded**.

File contents to encode and upload:
```
Shop Name: [name]
Address: [address]
Website: [url]
Contact Email: [email or contact form url]
Instagram: [handle or url, if found]
What they sell: [brief description]
Why a good fit: [specific reason]
Date first contacted: [today's date]

--- EMAIL SENT ---

Subject: [subject line]

[full email body]
```

---

## Step 8 — Create Gmail drafts

For each of the 3 shops, use the Gmail MCP connector to create a draft:
- **To:** the shop's contact email (leave blank if no email was found, and note the contact form URL in the body)
- **Subject:** the subject line from Step 6
- **Body:** the full personalised email from Step 6

---

## Step 9 — Summary

Print a concise summary:

```
Found 3 new prospects:

1. [Shop Name] — [one sentence on why they're a good fit]
   Contact: [email]
   Drive file saved. Gmail draft created.

2. [Shop Name] — ...

3. [Shop Name] — ...

Google Drive folder: "Bowlt Studios Stockists" ([N] total files including today's)
```

---

## Important rules

- **Never contact a shop that already has a file in Google Drive.** That file is the source of truth for who has been approached.
- Every email must be genuinely personalised. If you can't find anything specific about a shop, pick a different prospect instead.
- If Google Drive or Gmail MCP tools are unavailable, say so clearly and save the files locally to `/Users/oliverredeyoff/Documents/repos/BowltStudios/outreach/` instead, and print the emails to the screen.
- Today's date for "date first contacted" is available from your system context.

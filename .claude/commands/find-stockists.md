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

**Note:** if the folder does not exist the tool returns `{}` (empty object) — not an error. Treat that as an empty contacted list and proceed. You will create the folder in Step 7.

If the folder exists, note its `id`. Then list its contents to get the contacted list:

```
search_files query: '<folder_id>' in parents and mimeType != 'application/vnd.google-apps.folder'
```

Collect every file title (e.g. `The Corner Gift Shop.txt`). Strip the `.txt` extension. This is your **contacted list** — never proceed with a shop whose name already appears here.

---

## Step 3 — Search for prospects

Run these web searches **in parallel** to find roughly 10 candidate London-based independent retailers:
- "independent gift shops London handmade cards stationery independent makers"
- "independent florists London gift cards stationery local makers"
- "independent children's toy shop London gift cards independent makers"

Good fit signals:
- Curated, independent product selection
- Supports independent or local makers
- Warm, whimsical, or handcrafted brand feel
- Has an existing card or stationery section
- UK-based, ideally London

Poor fit: large chains, discount retailers, edgy/adult tone, purely digital.

For each candidate, note: name, rough location, website if visible in results.

**Tip:** Shops that make their own cards (e.g. pressed flower cards) are still valid prospects — hand-illustrated watercolour animal characters are complementary to botanical or photographic cards, not competitive.

---

## Step 4 — Filter and select 3 new prospects

Remove from your candidate list any shop whose name closely matches a name from the contacted list in Step 2.

From the remaining candidates, select the **3 best fits**.

---

## Step 5 — Research each of the 3 prospects in parallel

Run all 3 research searches **simultaneously** (one search per shop). For each, find:

- **Website URL**
- **Instagram handle** (if present)
- **Physical address**
- **Contact email** — look on their Contact or About page. If no direct email, note the contact form URL.
- **What they currently stock** — products, categories, any existing cards or illustration-based products
- **Their aesthetic and vibe** — one sentence
- **A specific, concrete reason** this shop is a great fit for Bowlt Studios — something you will reference by name in the email

---

## Step 6 — Write a personalised email for each shop

Write one short outreach email per shop. Emails should be brief — 3 to 4 short paragraphs at most. Use the templates below as a close guide; adapt only what needs to be personalised.

**Template A — concise and direct:**

Hi [Contact Name if you can find it],

I'm Tilly, the designer behind Bowlt Studios. We create colourful, playful greeting cards from watercolour illustrations.

I'd love to be considered as a potential stockist for your shop. Please find our wholesale catalogue attached, which outlines our collection, pricing, and order details.

If you're currently reviewing new brands, I'd be delighted to discuss further and send you a sample pack!

Thank you for your time,
Tilly

---

**Template B — slightly warmer:**

Hi [Contact Name],

I hope you're well. My name is Tilly, and I'm the founder of Bowlt Studios, a small business creating colourful illustrated greeting cards, based in the UK.

I've been following your shop and love your [mention one specific thing]. I think our collection would complement your current range beautifully.

I've attached our latest wholesale catalogue, which includes pricing, minimums, and product details. I'd be happy to send samples or answer any questions if helpful.

Thank you for your time, and I look forward to hearing from you.

Best wishes,
Tilly

---

**Rules:**
- Keep it short. Do not add extra paragraphs beyond the template structure.
- The one personalised line (what you love about the shop) is the only place to insert specific detail — keep it to one sentence.
- Do not mention specific card designs or characters — keep it simple.
- Do not use em dashes (—) anywhere — they read as AI-written.
- Do not use exclamation marks at the end of every sentence.
- Do not use marketing buzzwords ("leverage", "synergy", "curated offering").
- Sign off as Tilly.

**Subject line:** Warm and specific — not "Wholesale Enquiry". Something that sounds like it came from a real person.

---

## Step 7 — Prepare Drive files and upload everything in one batch

### 7a — Create the folder if needed

If the folder didn't exist in Step 2, create it now:
```
create_file title: "Bowlt Studios Stockists", mimeType: "application/vnd.google-apps.folder"
```
Capture the returned `id` as `FOLDER_ID`. If the folder already existed, use the `id` you noted in Step 2.

### 7b — Base64-encode all three file contents

The Drive API requires base64-encoded content. Use a Bash tool with Python to encode all three files at once:

```python
import base64

file1 = """Shop Name: [name]
Address: [address]
Website: [url]
Contact Email: [email]
Instagram: [handle]
What they sell: [description]
Why a good fit: [reason]
Date first contacted: [date]

--- EMAIL SENT ---

Subject: [subject]

[full email body]"""

file2 = """..."""
file3 = """..."""

print(base64.b64encode(file1.encode('utf-8')).decode('utf-8'))
print('---SPLIT---')
print(base64.b64encode(file2.encode('utf-8')).decode('utf-8'))
print('---SPLIT---')
print(base64.b64encode(file3.encode('utf-8')).decode('utf-8'))
```

Split the output on `---SPLIT---` to get the three encoded strings.

### 7c — Create all Drive files and Gmail drafts in one parallel batch

Fire all 6 calls **simultaneously**:

**3 × Drive file create** (one per shop):
- `title`: shop name + `.txt` (e.g. `Florals & Things.txt`)
- `mimeType`: `text/plain`
- `parentId`: `FOLDER_ID`
- `disableConversionToGoogleType`: `true` — **essential**, otherwise the file gets converted to a Google Doc
- `content`: the base64-encoded string for that shop

**3 × Gmail draft create** (one per shop):
- `to`: array containing the shop's contact email, e.g. `["info@example.com"]`
- `subject`: subject line from Step 6
- `body`: full personalised email from Step 6

If no contact email was found for a shop, leave `to` empty and note the contact form URL at the top of the email body.

---

## Step 8 — Summary

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

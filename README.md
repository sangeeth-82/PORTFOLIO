<<<<<<< HEAD
# PORTFOLIO
NOTHING BUT PERSONALS OF MINE
=======
# Sangeeth Prakash K — Portfolio

A responsive cyberpunk-inspired personal portfolio built with plain HTML, CSS, and JavaScript. No build step or framework is required.

## Files

- `index.html` — page content and sections
- `style.css` — responsive styling and visual effects
- `script.js` — mobile navigation, current year, and rotating role text

## Run locally

Open `index.html` in a browser, or run a local server from this folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish to GitHub

Create a new **public** repository on GitHub, for example `sangeeth-portfolio`. Do not initialize it with a README if you plan to push this folder as-is.

From this folder, run:

```bash
git init
git add .
git commit -m "Add personal portfolio"
git branch -M main
git remote add origin https://github.com/sangeeth-82/sangeeth-portfolio.git
git push -u origin main
```

If Git asks you to authenticate, complete the browser sign-in flow or use GitHub's supported authentication method. Never put a password or access token into source files.

## Deploy to Amazon S3 (static website hosting)

1. Sign in to AWS using your IAM user (not the root user).
2. Open **Amazon S3** and create a globally unique bucket name, e.g. `sangeeth-portfolio-<unique-suffix>`. Choose a region close to your audience.
3. Open the bucket → **Properties** → **Static website hosting** → **Edit** → **Enable**.
4. Set **Index document** to `index.html`. Save.
5. Upload `index.html`, `style.css`, and `script.js` to the bucket root (not inside an extra folder).
6. For a public S3 website endpoint, open **Permissions** → **Block public access** → edit and disable the bucket-level block settings that prevent public read. Confirm only if you intentionally want a public website.
7. Add a bucket policy that allows public read of objects. Replace `YOUR_BUCKET_NAME` with the exact bucket name:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadForWebsiteFiles",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME/*"
    }
  ]
}
```

8. Open **Properties** → **Static website hosting** and use the displayed **Bucket website endpoint**.

### Important AWS notes

- S3 website endpoints are HTTP-only. For HTTPS and a custom domain, put Amazon CloudFront in front of the bucket (and use Origin Access Control with a private bucket for a production setup).
- Public-read bucket policy makes every uploaded object publicly readable. Upload only files intended for the public.
- Keep root-user credentials private. Use an IAM user/role with only the permissions needed for this bucket. Do not create access keys for a website visitor.
- If AWS Organizations, account-level Block Public Access, or policy restrictions prevent public access, the bucket policy alone will not override them.
- AWS may charge for storage and requests; check current pricing and set a budget alert.

## Updating the website

After editing a file, push the change to GitHub:

```bash
git add .
git commit -m "Update portfolio"
git push
```

Then upload the changed file(s) to the S3 bucket again. GitHub and S3 do not automatically sync unless you configure a deployment workflow.

## Personalize before publishing

- Add your LinkedIn URL when you have it.
- Add a resume PDF only after placing it in this folder and linking it from the page.
- Verify every project description and replace any concept/prototype labels with the current project status.
- Skill bars are illustrative placeholders, not objective proficiency ratings.
>>>>>>> b9871e2 (Initial portfolio)

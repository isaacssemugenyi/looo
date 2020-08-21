# Project Looc
List Of Opensource Companies

# The method we used
## How did we measure the contribution?
When we measured the contribution we only considered the commits. We know there are many other ways to contribute to a project not just commits but in this particular case we wanted to focus on the commits.
## How can we know which company contributed to a repository?
We relied on the email address of the authors. The second part of the email is usually the company’s domain.
## How to assign a commit to a company?
There are around 2.4B public commits in GitHub (since 2011) and we have to analyze each and every one of them to answer this question. 
Using the GitHub API to extract that amount of data would be impossible. Thanks to the GitHub Archive Project, all the public GitHub events are stored in a publicly available [BigQuery](https://cloud.google.com/blog/products/gcp/github-on-bigquery-analyze-all-the-open-source-code) database. Using SQL to extract data makes the process much easier. 
## Clean up the data
After we counted the commits for each company. The data needs to be cleaned. We excluded email providers like gmail, hotmail, yandex etc. And there are some cases when commits were made by a bot, we also excluded them.
## Implementation
You can find the code in the `etl` (Export, Transform, Load) directory.

# Roadmap
- Add ETL source code
- Automate ETL
- Add the block list of domains to the repo and make it part of the ETL
- Add user block list and make it part of the ETL
# How to contribute?
TODO
CREATE TABLE IF NOT EXISTS {dest_table} (
                event_id INT64,
                event_type STRING,
                created_at TIMESTAMP,
                repo_id INT64,
                repo_name STRING,
                repo_url STRING,
                repo_fullname STRING,
                push_id INT64,
                actor_name STRING,
                commit_data STRING,
                commit_sha STRING,
                email STRING,
                email_domain STRING,
                email_domain_cleaned STRING)
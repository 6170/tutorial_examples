# Be sure to restart your server when you modify this file.
# default session storate is :cookie_store
Tutorial4::Application.config.session_store :active_record_store, key: '_tutorial4_session'

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rails generate session_migration")
# Tutorial4::Application.config.session_store :active_record_store


const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY;
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE;

export const BASE_URL = `curl https://api.airtable.com/v0//ZG%20Table%201/albums`;
export const headers = { Authorization: `Bearer ${AIRTABLE_KEY}` };
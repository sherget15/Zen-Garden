
// const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY;
// const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE;

export const BASE_URL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/plant`;
export const headers = { Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}` };
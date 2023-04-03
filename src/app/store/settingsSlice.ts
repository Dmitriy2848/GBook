import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ISettings } from 'app/store/ISettings';

const initialState: ISettings = {
	query: '',
	category: 'all',
	orderBy: 'relevance',
	startIndex: 0,
	maxResults: 30
};

const settingsSlice = createSlice({
	name: 'settings',
	initialState: initialState as ISettings,
	reducers: {
		setSettings(state, action: PayloadAction<Partial<ISettings>>) {
			for (const [key, value] of Object.entries(action.payload)) {
				state[key] = value;
			}
		}
	}
});

export default settingsSlice.reducer;

export const { setSettings } = settingsSlice.actions;

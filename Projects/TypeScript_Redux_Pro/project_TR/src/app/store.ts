import { configureStore } from '@reduxjs/toolkit'
import homeReducer from '../features/home/homeSlice'
import favoritesReducer, {
    setFavorites,
} from '../features/home/favoritesSlice'
import type { Place } from '../features/home/homeSlice'
import uiReducer from '../features/home/uiSlice'
import bookingsReducer from '../features/home/bookingsSlice'

const FAVORITES_STORAGE_KEY = 'smart-services-favorites'

function loadFavorites(): Place[] {
    try {
        const raw = localStorage.getItem(FAVORITES_STORAGE_KEY)
        if (!raw) return []

        const parsed: unknown = JSON.parse(raw)
        if (!Array.isArray(parsed)) return []

        return parsed as Place[]
    } catch {
        return []
    }
}

export const store = configureStore({
    reducer: {
        home: homeReducer,
        favorites: favoritesReducer,
        ui: uiReducer,
        bookings: bookingsReducer,
    },
})

store.dispatch(setFavorites(loadFavorites()))

store.subscribe(() => {
    try {
        const state = store.getState()
        localStorage.setItem(
            FAVORITES_STORAGE_KEY,
            JSON.stringify(state.favorites.items),
        )
    } catch {
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
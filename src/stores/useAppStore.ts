import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { createRecipesSlice, type RecipesSliceType } from './recipeSlice'
import { type FavoritesSliceType, createFavoritesSlice } from './favoritesSlice'
import { type NotificationSliceType, createNotificationSlice } from './notificationSlice'

// Necesario agregar todos los slices para que conozcan las firmas
export const useAppStore = create<RecipesSliceType & FavoritesSliceType & NotificationSliceType>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a)
})))

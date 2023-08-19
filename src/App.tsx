import { RouterProvider } from "react-router"
import { mainRoute } from "./router/mainRouter"
import { Provider} from "react-redux"
import { store } from "./global/store"
import { PersistGate } from "redux-persist/integration/react"
// import { useQueryClient} from "@tanstack/react-query"
import persistStore from "redux-persist/es/persistStore"


const persistor = persistStore(store)
const App = () => {
  return (
    <div>
     <Provider store={store} >
        <PersistGate loading={null} persistor={persistor}>
          {/* <QueryClientProvider client={client} > */}
            <RouterProvider router={mainRoute} />
          {/* </QueryClientProvider> */}
        </PersistGate>
      </Provider>
    </div>
  )
}

export default App
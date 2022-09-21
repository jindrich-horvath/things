# Things

### thing-route-params
#### see <br />

1. `index.js` <br /> 
`... <Route path="one/:id" element={<OneThingPage/>}/> ...`


2. `routes/OneThingPage.js` <br />
` ... const params = useParams() ...`


3. `routes/OneThingPageWithQuery.js` <br />
   ` ...  const [params, _] = useSearchParams() ...`
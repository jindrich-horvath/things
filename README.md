# Things

### thing-route-params
#### see <br />

1. `index.js` <br /> 
`... <Route path="one/:id" element={<OneThingPage/>}/> ...`


2. `routes/OneThingPage.js` <br />
` ... const params = useParams() ...`


3. `routes/OneThingPageWithQuery.js` <br />
   ` ...  const [params, _] = useSearchParams() ...`


4. `routes/ThingListPage.js` <br />
   ` ...  <Link to={`/one/${th.id}`}> ...` <br />
   ` ...  <Link to={`/one2?id=${th.id}`}> ...`
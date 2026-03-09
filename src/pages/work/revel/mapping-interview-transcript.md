# Revel Maps Case Study — Interview Transcript

---

**What triggered the switch from Mapbox to Google Maps? Was it a cost decision, feature gaps, reliability issues, or something else? And roughly when did this happen?**

The primary aspects were costs, we already had a relationship with Google so we could also get better support and easier to manage. Another aspect was Mapbox had bad/outdated place data and search results making the experience particularly bad for riders trying to find their desired destination. This was mostly in 2024.

---

**What was the driver problem the demand heatmap was solving? Were drivers complaining about dead zones, inefficient positioning, long waits between rides? What did you hear from them directly, and did you have any data (like driver idle time, complaints, churn) that validated the problem?**

The company had pivoted from full-time salaried driver model to a contractor model, so drivers were much more invested in completing as many rides as possible to get more tips and ride completion bonuses. Our analytics also showed we often had inefficient distribution of drivers relative to rider demand, but we had no good way of signaling this to drivers. The contractor model also meant drivers had more control over when they drove, meaning we had less ability to have more drivers at high demand times that we had with the full-time model. User interviews and data showed more experienced rideshare drivers knew where to go when, but newer drivers and those coming from Uber/Lyft wanted heatmaps/bonuses to help them find more rides and earn more.

---

**When you designed the heatmap itself, what were the key design challenges? For example: how did you represent demand intensity visually, did you have to balance showing demand vs. oversaturation, how did it layer on top of the existing driver map, and what data was powering it?**

We had a neighborhood zones model on the backend initially, but it didn't have high enough fidelity to handle good redistribution since some of the zones were fairly large. During this process the data team switched to using Uber's open source H3 hierarchical hexagon spatial indexing to map driver/rider supply/demand data. I could then take a snapshot of that data and translate it into visualizations and vectors I imported into Figma and would overlay on the map. These experiments made me realize typical gradient heatmaps or colored/opacity adjusted hexagons added too much visual noise and difficulty reading the map underneath, so I worked with the data team to translate that data back to our zones to make reading the demand map simpler for drivers where recognizable zone/neighborhood areas were colored at different intensities, making the map still look recognizable.

We experimented with a number of visualization and data approaches, from showing high rider demand and oversaturation of drivers, to focusing just on demand. We also tried showing demand data in each zone relative to the current demand in the zone the driver was in, but driver feedback was it was confusing to see the demand data suddenly change the moment you crossed a zone border, so we switched back to showing absolute demand (oversaturation wasn't useful to drivers).

Later we also began tweaking some of the intensity values based on estimated travel time (taking traffic into account) to zones since a driver would get better value out of going to a medium-high demand area that was a shorter drive away than a very-high demand area that was a longer drive away. We also had to determine the ideal update tick-rate, since updating by the minute was too distracting for drivers, we settled on a 10 minute update time.

---

**What were the results? After launching the demand heatmap, did you see measurable improvements in driver idle time or rides-per-hour, driver satisfaction or retention, rider wait times or fulfillment rates, or any qualitative feedback from drivers?**

We saw measurable improvements in driver revenue per hour and a reduction in passenger wait times. We also added analytics to detect how long drivers had the heatmap layer active, and whether they would navigate to high demand areas around them after accessing it. We saw a significant bump in heatmap usage from newer drivers, with usage tailing off as drivers learned the patterns of demand across the week and day. It was fairly clear demand patterns were quite regular except when there might be a significant event like a sports game or big concert where demand would spike differently, but drivers didn't know about these events, indicating we could add further improvements in the future by predicting spikes based on event schedules.

I worked with our devs to approach the map swap as systemically as possible so we could easily scale it to every app that uses maps without a lot of custom dev/design work. I used Google's map tools to build out a map theme for light and dark modes that emphasized road visibility without lots of distracting labels and location markers. We standardized map marker, icon, and line styles that were different across all our apps previously. There was also some difficulty in getting a consistent experience and performance between iOS and Android devices.

---

**On the Operations map specifically — this was for managers and mechanics, right? Were there any unique design challenges there compared to the driver or rider maps?**

The main challenge for the operations map was making sure only the information a given operator needed was visible, and then adding a filter layer on top of that to allow them to drill down to just the map information they needed (for example "all vehicles returning to a depot"). The cheaper map costs did allow us to integrate more mapping into things like our ride detail modals where previously you would have had to click into the full page to see a map.

I worked closest with the data team and two front-end engineers on prototyping and implementation, and would go visit the operations team and watch how they used the existing map to learn what frustrated them or what specific needs they had. I also ran user interviews with drivers to get their feedback on early prototypes of the demand map (we released it to a few of our beta test drivers). I pushed for going more in-depth with the demand map since the scalable approach to switching to Google Maps allowed us to have some more dev-time for new features.

---

**What were the biggest mistakes or pivots along the way?**

In my interviews and rides with drivers (as well as reports from operations) many of them said they were struggling to find parking and restrooms quickly to take reasonable breaks. We built out an "amenities" map view that highlighted common ride share parking and break areas and public restrooms, but analytics showed the amenities map was not used often and drivers said without knowing there was available parking spaces and inaccurate restroom data it wasn't very useful.

Due to fast turnaround time, limited dev resources, and limited analytics, many decisions had to be made initially based on my own experience using maps in apps and video games or while driving myself, and could only be confirmed or refined later once we actually got the prototypes or live releases in drivers hands. I trust that intuition and it usually guides my designs well, but I don't trust it blindly and allow follow-up data and feedback to change my mind and refine that intuition for the future.

---

**How did this project change or expand what Revel could do with maps going forward?**

It inspired a lot of exciting ideas that we wanted to pursue in the future. For example better data visualization for the analytics team (they really liked the heatmap compared to the clunky version they had which was very manual to update, although I also introduced them to the Felt mapping tool which they loved in the meantime). We also had a number of features we wanted to add to the rider experience that Google Maps would make easier, such as street view of their destination, Google Calendar integration to suggest upcoming destinations at relevant times, and a trip history map that made for a cool visualization.

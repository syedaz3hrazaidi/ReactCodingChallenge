 # Implementation Summary
In this project, a mock API approach has been used within the SkipSelection component to simulate the behavior of fetching data from a backend.
## API Simulation (Instead of fetch/axios)
+	While tools like fetch or axios could have been used to make actual HTTP requests, for this implementation, I chose to use a static local dataset inside the component.
+	This decision was made to:
+	Speed up development and testing,
+	Avoid external dependencies during the initial phase,
+	Focus on UI/UX without worrying about backend availability.
## Data Transformation
+	Raw data was shaped to match UI needs — for example:
+	hire_period_days → hirePeriod (e.g., “14 days”),
+	Boolean flags like allowed_on_road and allows_heavy_waste were flipped to clear, visual badges such as Private Only and No Heavy Waste.
 ## UI/UX Enhancements
+	Responsive card layout using Tailwind CSS,
+ Try to create modern UI.
+	Hover effects, badge overlays, and conditional display logic.
+	Loader spinner while mock data "loads".
## Backend-Ready Architecture
+	The component structure is built in a way that allows easy future integration with real APIs.
+	To connect with an actual backend, the static data block inside useEffect can be replaced with a fetch() or axios.get() call.



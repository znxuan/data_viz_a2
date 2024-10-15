import pandas as pd
import os

# Check if files exist
print(os.getcwd())
if os.path.exists('revenue_global_beauty.csv'):
    print("File found")
else:
    print("File not found")

# Load the two datasets
beauty_data = pd.read_csv('/Users/tanzinxuan/Downloads/3179 a2/data_viz_vegalite/revenue_global_beauty.csv')
countries_data = pd.read_csv('/Users/tanzinxuan/Downloads/3179 a2/data_viz_vegalite/ne_110m_countries.csv')

# Perform a left join on 'NAME' and 'Country Name'
merged_data = pd.merge(countries_data, beauty_data, left_on='NAME', right_on='Country', how='left')

# Drop the 'Country' column from beauty_data after the merge, keeping only the 'NAME' as 'Country'
merged_data.drop(columns=['Country'], inplace=True)

# Rename the 'NAME' column to 'Country' for clarity
merged_data.rename(columns={'NAME': 'Country'}, inplace=True)

# List of year columns to handle (2018-2029)
year_columns = [str(year) for year in range(2018, 2030)]

# Fill null values in these year columns with 0
merged_data[year_columns] = merged_data[year_columns].fillna(0)

# Keep only 'Country' and the year columns (2018-2029)
filtered_data = merged_data[['Country'] + year_columns]

# Save the cleaned and filtered data to a new CSV file
filtered_data.to_csv('filtered_revenue_years.csv', index=False)

# Check the result
print(filtered_data)


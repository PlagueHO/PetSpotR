using Dapr.Client;

namespace PetSpotR.Models 
{
    public class PetModel
    {
        public string Name { get; set; }
        public string Type { get; set; }
        public string Breed { get; set; }
        public string OwnerEmail { get; set; }
        public string ID { get; set; }
        public string State { get; set; }
        public List<string> Images { get; set; }
        public DateTime DOB { get; set; }




        // Constructor
        public PetModel()
        {
            Name = "";
            Type = "";
            Breed = "";
            OwnerEmail = "";
            ID = Guid.NewGuid().ToString();
            State = "new";
            Images = new();
            DOB = DateTime.MinValue;
        }

        public async Task SavePetStateAsync(DaprClient daprClient, string storeName)
        {
            try {
                await daprClient.SaveStateAsync(
                    storeName: storeName,
                    key: ID,
                    value: this
                );
            } catch {
                throw;
            }

            return;
        }

        public async Task PublishLostPetAsync(DaprClient daprClient, string pubsubName)
        {
            try {
                await daprClient.PublishEventAsync(
                    pubsubName: pubsubName,
                    topicName: "lostPet",
                    data: new Dictionary<string, string>
                    {
                        { "petId", ID }
                    }
                );
            } catch {
                throw;
            }

            return;
        }

        /// <summary>
        /// Calculates the age of the pet in years.
        /// </summary>
        /// <returns>The age of the pet in years.</returns>
        public int PetAgeInYears()
        {
            return (int) Math.Floor((DateTime.Now - DOB).TotalHours / 365);
        }
    }
}

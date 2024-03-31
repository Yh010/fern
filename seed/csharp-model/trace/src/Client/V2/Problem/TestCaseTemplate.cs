using System.Text.Json.Serialization;
using Client.V2;

namespace Client.V2;

public class TestCaseTemplate
{
    [JsonPropertyName("templateId")]
    public string TemplateId { get; init; }

    [JsonPropertyName("name")]
    public string Name { get; init; }

    [JsonPropertyName("implementation")]
    public TestCaseImplementation Implementation { get; init; }
}

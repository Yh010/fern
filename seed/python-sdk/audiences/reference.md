# Reference
## FolderA Service
<details><summary><code>client.folder_a.service.<a href="src/seed/folder_a/service/client.py">get_direct_thread</a>()</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```python
from seed.client import SeedAudiences

client = SeedAudiences(
    base_url="https://yourhost.com/path/to/api",
)
client.folder_a.service.get_direct_thread()

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request_options:** `typing.Optional[RequestOptions]` — Request-specific configuration.
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Foo
<details><summary><code>client.foo.<a href="src/seed/foo/client.py">find</a>(...)</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```python
from seed.client import SeedAudiences

client = SeedAudiences(
    base_url="https://yourhost.com/path/to/api",
)
client.foo.find(
    optional_string="string",
    public_property="string",
    private_property=1,
)

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**optional_string:** `OptionalString` 
    
</dd>
</dl>

<dl>
<dd>

**public_property:** `typing.Optional[str]` 
    
</dd>
</dl>

<dl>
<dd>

**private_property:** `typing.Optional[int]` 
    
</dd>
</dl>

<dl>
<dd>

**request_options:** `typing.Optional[RequestOptions]` — Request-specific configuration.
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

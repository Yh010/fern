package com.seed.exhaustive.resources.endpoints;

import com.seed.exhaustive.core.ClientOptions;
import com.seed.exhaustive.core.Suppliers;
import com.seed.exhaustive.resources.endpoints.container.ContainerClient;
import com.seed.exhaustive.resources.endpoints.enum_.EnumClient;
import com.seed.exhaustive.resources.endpoints.httpmethods.HttpMethodsClient;
import com.seed.exhaustive.resources.endpoints.object.ObjectClient;
import com.seed.exhaustive.resources.endpoints.params.ParamsClient;
import com.seed.exhaustive.resources.endpoints.primitive.PrimitiveClient;
import com.seed.exhaustive.resources.endpoints.union.UnionClient;
import java.util.function.Supplier;

public class EndpointsClient {
    protected final ClientOptions clientOptions;

    protected final Supplier<ContainerClient> containerClient;

    protected final Supplier<EnumClient> enumClient;

    protected final Supplier<HttpMethodsClient> httpMethodsClient;

    protected final Supplier<ObjectClient> objectClient;

    protected final Supplier<ParamsClient> paramsClient;

    protected final Supplier<PrimitiveClient> primitiveClient;

    protected final Supplier<UnionClient> unionClient;

    public EndpointsClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
        this.containerClient = Suppliers.memoize(() -> new ContainerClient(clientOptions));
        this.enumClient = Suppliers.memoize(() -> new EnumClient(clientOptions));
        this.httpMethodsClient = Suppliers.memoize(() -> new HttpMethodsClient(clientOptions));
        this.objectClient = Suppliers.memoize(() -> new ObjectClient(clientOptions));
        this.paramsClient = Suppliers.memoize(() -> new ParamsClient(clientOptions));
        this.primitiveClient = Suppliers.memoize(() -> new PrimitiveClient(clientOptions));
        this.unionClient = Suppliers.memoize(() -> new UnionClient(clientOptions));
    }

    public ContainerClient container() {
        return this.containerClient.get();
    }

    public EnumClient enum_() {
        return this.enumClient.get();
    }

    public HttpMethodsClient httpMethods() {
        return this.httpMethodsClient.get();
    }

    public ObjectClient object() {
        return this.objectClient.get();
    }

    public ParamsClient params() {
        return this.paramsClient.get();
    }

    public PrimitiveClient primitive() {
        return this.primitiveClient.get();
    }

    public UnionClient union() {
        return this.unionClient.get();
    }
}

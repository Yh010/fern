package com.seed.multiUrlEnvironment;

import com.seed.multiUrlEnvironment.core.ClientOptions;
import com.seed.multiUrlEnvironment.core.Suppliers;
import com.seed.multiUrlEnvironment.resources.ec2.Ec2Client;
import com.seed.multiUrlEnvironment.resources.s3.S3Client;
import java.util.function.Supplier;

public class SeedMultiUrlEnvironmentClient {
    protected final ClientOptions clientOptions;

    protected final Supplier<Ec2Client> ec2Client;

    protected final Supplier<S3Client> s3Client;

    public SeedMultiUrlEnvironmentClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
        this.ec2Client = Suppliers.memoize(() -> new Ec2Client(clientOptions));
        this.s3Client = Suppliers.memoize(() -> new S3Client(clientOptions));
    }

    public Ec2Client ec2() {
        return this.ec2Client.get();
    }

    public S3Client s3() {
        return this.s3Client.get();
    }

    public static SeedMultiUrlEnvironmentClientBuilder builder() {
        return new SeedMultiUrlEnvironmentClientBuilder();
    }
}
